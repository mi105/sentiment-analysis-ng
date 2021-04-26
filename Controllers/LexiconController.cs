using Microsoft.AspNetCore.Mvc;
using SentimentAnalysis.Data.Services;
using SentimentAnalysis.Data.Models;
using System;

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
            if (ModelState.IsValid)
            {
                try
                {
                    _service.AddWord(word);
                    return Ok();
                }
                catch (Exception e)
                {
                    //here we could use the logger to log the exception 
                    return this.BadRequest();
                }
                
            }
            else
                return this.BadRequest(this.ModelState);
        }

        //Read lexicon
        [HttpGet("[action]")]
        public IActionResult GetLexicon()
        {
            try
            {
                var lexicon = _service.GetLexicon();
                return Ok(lexicon.words);
            }
            catch (Exception e)
            {
                //here we could use the logger to log the exception 
                return this.BadRequest();
            }
            
        }

        //Update a word in lexicon
        [HttpPut("UpdateWord/{id}")]
        public IActionResult UpdateWord(int id, [FromBody] Word word)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    _service.UpdateWord(id, word);
                    return Ok(word);
                }
                catch (Exception e)
                {
                    //here we could use the logger to log the exception 
                    return this.BadRequest();
                }
                
            }
            else
                return this.BadRequest(this.ModelState);
        }

        //Delete a word from lexicon
        [HttpDelete("DeleteWord/{id}")]
        public IActionResult DeleteWord(int id)
        {
            try
            {
                _service.DeleteWord(id);
                return Ok();
            }
            catch (Exception e)
            {
                //here we could use the logger to log the exception
                return this.BadRequest();
            }
            _service.DeleteWord(id);
            return Ok();
        }

        [HttpGet("SingleWord/{id}")]
        public IActionResult GetWordById(int id)
        {
            try
            {
                var word = _service.GetWordById(id);
                return Ok(word);
            }
            catch (Exception e)
            {
                //here we could use the logger to log the exception
                return this.BadRequest();
            }
            
        }
    }

}