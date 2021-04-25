using SentimentAnalysis.Data.Models;
using System.Collections.Generic;
namespace SentimentAnalysis.Data
{
    public static class Data
    {
        public static Lexicon Lexicon =>_lexicon;
        
        static Lexicon _lexicon = new Lexicon()
        {
            words = new List<Word>()
            {
                new Word()
                {
                    Id = 1,
                    Text = "nice",
                    Sentiment = 0.4
                },
                new Word()
                {
                    Id = 2,
                    Text = "excellent",
                    Sentiment = 0.8
                },
                new Word()
                {
                    Id = 3,
                    Text = "modest",
                    Sentiment = 0
                },
                new Word()
                {
                    Id = 4,
                    Text = "horrible",
                    Sentiment = -0.8
                },
                new Word()
                {
                    Id = 5,
                    Text = "ugly",
                    Sentiment = -0.5
                },
            }
        };

    }
}