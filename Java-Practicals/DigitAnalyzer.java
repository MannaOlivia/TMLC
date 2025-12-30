
import java.util.Scanner;
public class DigitAnalyzer{
    int countDigit(int num,int d)
    {
        int c=0;
        int rem=0;
       while (num>0){
        rem=num%10;
        if (rem==d)
        {
            c+=1;
        }
        num=num/10;

       }
       return c;

    }

    
public static void main(String[] args)
{
    DigitAnalyzer dg=new DigitAnalyzer();
    Scanner sc=new Scanner(System.in);
    System.out.print("Enter a number:");
    int num=sc.nextInt();
    System.out.print("Enter a number to search: ");
    int d=sc.nextInt();

    System.out.println(dg.countDigit(num,d));
}
}
