using System.ComponentModel.DataAnnotations;

namespace SentimentAnalysis.Data.Models
{
    public class Word
    {
        public int Id { get; set; }

        public string Text { get; set; }

        [Range(-1,1)]
        public double Sentiment {get; set;}
    }


}