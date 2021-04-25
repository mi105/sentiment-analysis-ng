using Microsoft.AspNetCore.Mvc;
using SentimentAnalysis.Data.Services;
using SentimentAnalysis.Data.Models;

namespace SentimentAnalysis.Controllers
{
    [Route("api/[controller]")]
    public class LexiconController : Controller
    {
        private ILexiconService _service;

        public LexiconController(ILexiconService service)
        {
            _service = service;
        }

        //Create/Add a new word
        [HttpPost("AddWord")]
        public IActionResult AddWord([FromBody] Word word)
        {
            _service.AddWord(word);
            return Ok("Added");
        }

        //Read lexicon
        [HttpGet("[action]")]
        public IActionResult GetLexicon()
        {
            var lexicon = _service.GetLexicon();
            return Ok(lexicon.words);
        }

        //Update a word in lexicon
        [HttpPut("UpdateWord/{id}")]
        public IActionResult UpdateWord(int id, [FromBody] Word word)
        {
            _service.UpdateWord(id, word);
            return Ok(word);
        }

        //Delete a word from lexicon
        [HttpDelete("DeleteWord/{id}")]
        public IActionResult DeleteWord(int id)
        {
            _service.DeleteWord(id);
            return Ok();
        }

        [HttpGet("SingleWord/{id}")]
        public IActionResult GetWordById(int id)
        {
            var word = _service.GetWordById(id);
            return Ok(word);
        }
    }

}