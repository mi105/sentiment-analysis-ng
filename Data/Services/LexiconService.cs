using SentimentAnalysis.Data.Models;

namespace SentimentAnalysis.Data.Services
{

    public class LexiconService : ILexiconService
    {
        public void AddWord(Word newWord)
        {
            Data.Lexicon.words.Add(newWord);
        }

        public void DeleteWord(int id)
        {
            var index = Data.Lexicon.words.FindIndex(0,Data.Lexicon.words.Count, x => x.Id == id);
            if(index != -1)
                Data.Lexicon.words.RemoveAt(index);
        }

        public Lexicon GetLexicon()
        {
            return Data.Lexicon;
        }

        public Word GetWordById(int id)
        {
            return Data.Lexicon.words.Find(x=> x.Id == id);
        }

        public void UpdateWord(int id, Word newWord)
        {
            var index = Data.Lexicon.words.FindIndex(0,Data.Lexicon.words.Count, x => x.Id == id);
            if (index != -1)
            {
                var word = Data.Lexicon.words[index];
                word.Sentiment = newWord.Sentiment;
                word.Text = newWord.Text;
            }
        }
    }
}