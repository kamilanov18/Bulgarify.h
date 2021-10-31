using System;
using низ = global::System.String;

namespace BulgarifyCs
{
    public static class BulgarifyString
    {
        public static bool Съдържа(this string низ, String value, StringComparison ТипНаСравнение)
        {
            return низ.Contains(value, ТипНаСравнение);
        }
        public static bool Съдържа(this string низ, char value, StringComparison ТипНаСравнение)
        {
            return низ.Contains(value, ТипНаСравнение);
        }
        public static bool Съдържа(this string низ, char стойност)
        {
            return низ.Contains(стойност);
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


        public static String[] Раздели(this string str, String[]? separator, int count, StringSplitOptions options)
        {
            return str.Split(separator, count, options);
        }

        public static String[] Раздели(this string str, String? separator, int count, StringSplitOptions options = StringSplitOptions.None)
        {
            return str.Split(separator, count, options);
        }

        public static String[] Раздели(this string str, String[]? separator, StringSplitOptions options)
        {
            return str.Split(separator, options);
        }

        public static String[] Раздели(this string str, char[]? separator, int count, StringSplitOptions options)
        {
            return str.Split(separator, count, options);
        }

        public static String[] Раздели(this string str, String? separator, StringSplitOptions options = StringSplitOptions.None)
        {
            return str.Split(separator, options);
        }

        public static String[] Раздели(this string str, char[]? separator, StringSplitOptions options)
        {
            return str.Split(separator, options);
        }

        public static String[] Раздели(this string str, char separator, StringSplitOptions options = StringSplitOptions.None)
        {
            return str.Split(separator, options);
        }

        public static String[] Раздели(this string str, params char[]? separator)
        {
            return str.Split(separator);
        }

        public static String[] Раздели(this string str, char[]? separator, int count)
        {
            return str.Split(separator, count);
        }

        public static String[] Раздели(this string str, char separator, int count, StringSplitOptions options = StringSplitOptions.None)
        {
            return str.Split(separator, count, options);
        }
    }
}
