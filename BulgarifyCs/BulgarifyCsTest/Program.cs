using System;
using BulgarifyCs;



namespace BulgarifyCsTest
{
    class Program
    {
        static void Main(string[] args)
        {
            var низ = "Доко, Доко, Доко, Кайба шеску калумач";
            низ.ПозицияНа("Доко");
            низ.Съдържа("Доко");
        }
    }
}
