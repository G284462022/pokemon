import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

 
public class Main_waza {
	
	public static void main(String[] args) {
		try {
			Path path = Paths.get("txt技.txt");
			List lines = Files.readAllLines(path);

            // filewriter.write("こんにちは\r\n");
            // filewriter.write("お元気ですか\r\n");//これで書き込み

            for(int i = 0 ; i < lines.size() ; i++){
                foo(lines.get(i));
            }


		} catch(IOException ioex) {
			ioex.printStackTrace();
		}
	}

    public static void foo(Object ob){
        try{

        File file = new File("new技-1.txt");
        FileWriter filewriter = new FileWriter(file,true);

        String[] a = new String[10];
        String str = ob.toString();
        String[] space = str.split(" ");
            String[] space1 = space[0].split("=");
            String[] space2 = space1[1].split("'");
            a[0] = "\"data_" + space2[1] + "\":{";

            a[1] = "    \"no\":\"" +space2[1] + "\",";
            
            space1 = space[1].split("=");
            space2 = space1[1].split("'");
            a[2] = "    \"name\":\"" + space2[1] + "\",";

            space1 = space[2].split("=");
            space2 = space1[1].split("'");
            a[3] = "    \"id\":" + space2[1] + ",";

            space1 = space[3].split("=");
            space2 = space1[1].split("'");
            a[4] = "    \"type\":\"" + space2[1] + "\",";

            space1 = space[4].split("=");
            space2 = space1[1].split("'");
            a[5] = "    \"class\":\"" + space2[1] + "\",";

            space1 = space[5].split("=");
            space2 = space1[1].split("'");
            a[6] = "    \"pw\":\"" + space2[1] + "\",";

            space1 = space[6].split("=");
            space2 = space1[1].split("'");
            a[7] = "    \"hit\":\"" + space2[1] + "\",";

            space1 = space[7].split("=");
            space2 = space1[1].split("'");
            a[8] = "    \"pp\":" + space2[1] + ",";

            space1 = space[8].split("=");
            space2 = space1[1].split("'");
            a[9] = "    \"filter\":\"" + space2[1] + "\",";
            for(int i = 0 ; i < a.length ; i++){
                filewriter.write(a[i] + "\n");
            }
        filewriter.write("    \"text\":\"" + space[9] + "\"");
        filewriter.write("\n},\n");
        //一番下のオブジェクト要素にも「,」がついてくるので注意

        filewriter.close();
    } catch(IOException ioex) {
			ioex.printStackTrace();
		}
    }

}
