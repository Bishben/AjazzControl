import org.hid4java.HidDevice;
import org.hid4java.HidManager;
import org.hid4java.HidServices;

public class Main {

    public static void parseStatusData(HidDevice device) {
        byte[] buffer = new byte[64];
        int bytesRead = device.read(buffer, 1000);

        if (bytesRead > 0) {
            System.out.print("Received: ");

            for (int i = 0; i < bytesRead; i++) {
                System.out.printf("%02X ", buffer[i] & 0xFF);
            }

            System.out.println();

                int batteryPercentage = buffer[5] & 0xFF;

                int connectionMode = buffer[6] & 0xFF;
                String connectionModeStr = (connectionMode == 0) ? "Wired" : (connectionMode == 1) ? "2.4GHz" : "Unknown";

                String chargingStatus = ((buffer[7] & 0xFF) == 1) ? "Charging" : "Not Charging";

                int major = (buffer[12] >> 4) & 0x0F;
                int minor = buffer[12] & 0x0F;
                int patch = 10 * ((buffer[13] >> 4) & 0x0F) + (buffer[13] & 0x0F);
                String firmwareVersion = major + "." + minor + "." + patch;

                System.out.println("Battery Percentage: " + batteryPercentage + "%");
                System.out.println("Connection Mode: " + connectionModeStr);
                System.out.println("Charging Status: " + chargingStatus);
                System.out.println("Firmware Version: " + firmwareVersion);
        }
    }

    public static void requestStatusData(HidDevice device) {
        byte[] requestData = new byte[32];
        requestData[0] = (byte) 170;
        requestData[1] = 85;
        requestData[2] = (byte) 204;
        requestData[3] = 51;   
        requestData[4] = 14;

        int writtenData = device.write(requestData, requestData.length, (byte) 0);
        System.out.println("Requested status data. Written " + writtenData + " bytes to the device.");

        parseStatusData(device);
    }

    public static void main(String[] args) {

        HidServices hidServices = HidManager.getHidServices();

        HidDevice device = hidServices.getAttachedHidDevices().stream().filter(d -> d.getVendorId() == 0x1A2C && d.getProductId() == 0x8FFF && d.getInterfaceNumber() == 0).findFirst().orElse(null);

        if (device == null) {
            System.out.println("[-] Device not found");
            return;
        }

        System.out.println("Device Found\nOpening device...");

        if (device.open() == false) {
            System.out.println("[-] Failed to open device.");
            return;
        }

        System.out.println("Device opened successfully!");

        requestStatusData(device);

        int run = 0;
        while (run == 1) {
            parseStatusData(device);
        }
    }
}