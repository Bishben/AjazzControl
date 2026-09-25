import org.hid4java.HidDevice;
import org.hid4java.HidManager;
import org.hid4java.HidServices;
import java.util.Scanner;

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
        byte[] writeData = new byte[32];
        writeData[0] = (byte) 170;
        writeData[1] = 85;
        writeData[2] = (byte) 204;
        writeData[3] = 51;   
        writeData[4] = 14;

        int writtenData = device.write(writeData, writeData.length, (byte) 0);
        System.out.println("Requested status data. Written " + writtenData + " bytes to the device.");

        parseStatusData(device);
    }

    public static void setSleepTime(HidDevice device, int sleepTime) {
        if (sleepTime < 1 || sleepTime > 4) {
            System.out.println("[-] Invalid sleep time. Must be between 1 and 4.");
            return;
        }

        byte[] writeData = new byte[32];
        writeData[0] = (byte) 170;
        writeData[1] = 85;
        writeData[2] = (byte) 204;
        writeData[3] = 51;   
        writeData[4] = 12;  
        writeData[5] = (byte) sleepTime;

        int writtenData = device.write(writeData, writeData.length, (byte) 0);
        System.out.println("Set sleep time to Level " + sleepTime + ". Written " + writtenData + " bytes to the device.");
    }

    public static void setResponseTime(HidDevice device, int responseTime) {
        if (responseTime < 1 || responseTime > 3) {
            System.out.println("[-] Invalid response time. Must be between 1 and 4.");
            return;
        }

        byte[] writeData = new byte[32];
        writeData[0] = (byte) 170;
        writeData[1] = 85;
        writeData[2] = (byte) 204;
        writeData[3] = 51;   
        writeData[4] = 13;  
        writeData[5] = (byte) responseTime;

        int writtenData = device.write(writeData, writeData.length, (byte) 0);
        System.out.println("Set response time to Level " + responseTime + ". Written " + writtenData + " bytes to the device.");
    }
    
    // Lighting Modes:
    public static void setTurnOffLed(HidDevice device) {
        byte[] writeData = new byte[32];
        writeData[0] = (byte) 170;
        writeData[1] = 85;
        writeData[2] = (byte) 204;
        writeData[3] = 51;   
        writeData[4] = 7;  
        writeData[5] = 6;

        int writtenData = device.write(writeData, writeData.length, (byte) 0);
        System.out.println("Turned off LED. Written " + writtenData + " bytes to the device.");
    }

    public static void setLightEffect(HidDevice device, int effect) {
        if (effect < 0 || effect > 22) {
            System.out.println("[-] Invalid light effect. Must be between 0 and 22.");
            return;
        }

        byte[] writeData = new byte[32];
        writeData[0] = (byte) 170;
        writeData[1] = 85;
        writeData[2] = (byte) 204;
        writeData[3] = 51;   
        writeData[4] = 7;

        writeData[6] = 4; // Brightness
        writeData[7] = 2; // Speed
        writeData[8] = 0; // Direction
        writeData[9] = 7; // Color
        
        if (effect == 0) {
            writeData[5] = 0; // Flow
        } else if (effect == 1) {
            writeData[5] = 1; // Starry
        } else if (effect == 2) {
            writeData[5] = 2; // Ripple
        } else if (effect == 3) {
            writeData[5] = 3; // Laser
        } else if (effect == 4) {
            writeData[5] = 4; // Spectrum
        } else if (effect == 5) {
            writeData[5] = 5; // Kaleidoscope
        } else if (effect == 6) {
            writeData[5] = 6; // Static
            writeData[9] = 4; // Color
        } else if (effect == 7) {
            writeData[5] = 7; // Breathing
        } else if (effect == 8) {
            writeData[5] = 8; // Cross Flow
        } else if (effect == 9) {
            writeData[5] = 9; // Float
        } else if (effect == 10) {
            writeData[5] = 10; // Snow
        } else if (effect == 11) {
            writeData[5] = 11; // Jianghua
        } else if (effect == 12) {
            writeData[5] = 12; // Snake
        } else if (effect == 13) {
            writeData[5] = 13; // Tornado
        } else if (effect == 14) {
            writeData[5] = 14; // Impact
        } else if (effect == 15) {
            writeData[5] = 15; // Rain
        } else if (effect == 16) {
            writeData[5] = 16; // Windmill
        } else if (effect == 17) {
            writeData[5] = 17; // Sine
        } else if (effect == 18) {
            writeData[5] = 18; // Horse
        } else if (effect == 19) {
            writeData[5] = 19; // Cross
        } else if (effect == 20) {
            //writeData[5] = 20; // Custom
        } else if (effect == 21) {
            //writeData[5] = 21; // Ripple Glow (Music?)
        } else if (effect == 22) {
            setTurnOffLed(device); // Turn Off
            return;
        } else {
            System.out.println("[-] Invalid light effect. Must be between 0 and 22.");
            return;
        }

        int writtenData = device.write(writeData, writeData.length, (byte) 0);
        System.out.println("Set light effect to " + effect + ". Written " + writtenData + " bytes to the device.");
    }

    public static int LightEffectsMenu(HidDevice device, Scanner scanner) {
        System.out.println("Light Effects Menu:");
        System.out.println("0: Flow");
        System.out.println("1: Starry");
        System.out.println("2: Ripple");
        System.out.println("3: Laser");
        System.out.println("4: Spectrum");
        System.out.println("5: Kaleidoscope");
        System.out.println("6: Static");
        System.out.println("7: Breathing");
        System.out.println("8: Cross Flow");
        System.out.println("9: Float");
        System.out.println("10: Snow");
        System.out.println("11: Jianghua");
        System.out.println("12: Snake");
        System.out.println("13: Tornado");
        System.out.println("14: Impact");
        System.out.println("15: Rain");
        System.out.println("16: Windmill");
        System.out.println("17: Sine");
        System.out.println("18: Horse");
        System.out.println("19: Cross");
        System.out.println("20: Custom"); // Not Implemented
        System.out.println("21: Ripple Glow (Music?)"); // Not Implemented
        System.out.println("22: Turn Off");
        System.out.println("-1: Exit");
        
        System.out.print("Enter the number of the light effect you want to set: ");
        int effect = scanner.nextInt();

        if (effect == -1) {
            System.out.println("Exiting Light Effects Menu.");
            return 0;
        }
        setLightEffect(device, effect);
        return 1;
    }

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

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
        //setSleepTime(device, 2);
        //setResponseTime(device, 1);
        //setTurnOffLed(device);
        //setLightEffect(device, 1);

        int run = 1;
        while (run == 1) {
            //parseStatusData(device);
            run = LightEffectsMenu(device, scanner);
        }

        device.close();
        scanner.close();
    }
}