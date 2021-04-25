using System.Collections.Generic;
using System.Runtime.Serialization;

namespace SentimentAnalysis.Data.Models
{

    [DataContract]
    public class Lexicon
    {
        [DataMember]
        public List<Word> words;

    }

}