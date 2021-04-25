using SentimentAnalysis.Data.Models;
namespace SentimentAnalysis.Data.Services
{
    public interface ILexiconService
    {
        Lexicon GetLexicon();
        Word GetWordById(int id);

        void UpdateWord(int id, Word newWord);

        void DeleteWord(int id);

        void AddWord(Word newWord);
    }

}