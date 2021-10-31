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
        public static int ПозицияНа(this string str, String value, StringComparison comparisonType)
        {
            return str.IndexOf(value, comparisonType);
        }
        public static int ПозицияНа(this string str, String value, int startIndex, StringComparison comparisonType)
        {
            return str.IndexOf(value, startIndex, comparisonType);
        }
        public static int ПозицияНа(this string str, String value, int startIndex, int count, StringComparison comparisonType)
        {
            return str.IndexOf(value, startIndex, count, comparisonType);
        }
        public static int ПозицияНа(this string str, String value, int startIndex, int count)
        {
            return str.IndexOf(value, startIndex, count);
        }
        public static int ПозицияНа(this string str, String value, int startIndex)
        {
            return str.IndexOf(value, startIndex);
        }
        public static int ПозицияНа(this string str, String value)
        {
            return str.IndexOf(value);
        }
        public static int ПозицияНа(this string str, char value, StringComparison comparisonType)
        {
            return str.IndexOf(value, comparisonType);
        }
        public static int ПозицияНа(this string str, char value, int startIndex, int count)
        {
            return str.IndexOf(value, startIndex, count);
        }
        public static int ПозицияНа(this string str, char value, int startIndex)
        {
            return str.IndexOf(value, startIndex);
        }
        public static int ПозицияНа(this string str, char value)
        {
            return str.IndexOf(value);
        }
    }
}
