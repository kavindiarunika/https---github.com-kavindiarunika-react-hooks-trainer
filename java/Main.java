class Bank{
    float getRateOfInternet(){
        return 0;
    }
}
class HNB extends Bank{
    float getRateOfInternet(){
        return 8.4f;
    }
}
class CDB extends Bank{
    float getRateOfInternet(){
        return 7.3f;
    }
}
class NSB extends Bank{
    float getRateOfInternet(){
        return 9.7f;
    }
}

 class Main {
    public static void main(String[] args)
{
    Bank b;
    b=new Bank();
    System.out.println("Bank rate of internet "+b.getRateOfInternet());
    b =new HNB();
    System.out.println("bank rate of internet"+ b.getRateOfInternet());
    b=new CDB();
    System.out.println("bank rate of internet"+ b.getRateOfInternet());
    b=new NSB();
    System.out.println("bank rate of internet"+b.getRateOfInternet());
}    
}
