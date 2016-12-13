using System;

public class SyntaxPreview
{
    public string Content { get; set; } = "";

    public SyntaxPreview(List<string> options)
    {
        if (options.Count() == 0)
        {
            throw new Exception();
        }

        this.Content = options[0];
    }

    public bool IsLengthOf(string str)
    {
        return this.Content.Length == str.Length;
    }

    public bool IsEven()
    {
        return this.Content.Length % 2 === 0;
    }
}
