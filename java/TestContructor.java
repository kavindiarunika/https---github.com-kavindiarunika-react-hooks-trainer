public class TestContructor{
    TestContructor(){
        this(10);
        System.out.println("no-arg constructor");
    }
    TestContructor(int i){
        this(10.5);
        System.out.println("int-arg");
    }
    TestContructor(double d){
        System.out.println("double-arg");
    }
public static void main(String[] args){
    TestContructor t1 = new TestContructor();
    System.out.println("");
    TestContructor t2 = new TestContructor(10);
    System.out.println();
    TestContructor t3 = new TestContructor(20.5);
    System.out.println();
}
}
