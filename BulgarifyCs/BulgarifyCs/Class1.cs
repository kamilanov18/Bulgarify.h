using System;
using низ = global::System.String;

namespace BulgarifyCs
{
    public static class BulgarifyString
    {
        public static bool Съдържа(this string str, String value, StringComparison comparisonType)
        {
            return str.Contains(value, comparisonType);
        }
        public static bool Съдържа(this string str, char value, StringComparison comparisonType)
        {
            return str.Contains(value, comparisonType);
        }
        public static bool Съдържа(this string str, char value)
        {
            return str.Contains(value);
        }
        public static bool Съдържа(this string str, String value)
        {
            return str.Contains(value);
        }
    }
}
