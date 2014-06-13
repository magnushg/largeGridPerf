using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Runtime.Remoting.Messaging;
using System.Web.Http;
using Antlr.Runtime;

namespace PerfSpike.Controllers
{
    public class ValuesController : ApiController
    {
        // GET api/values
        public IEnumerable<dynamic> Get()
        {
            var result = Enumerable.Range(0, 100).Select(x => new {name = "Petter" + x, values = Enumerable.Range(0, 3*24).ToArray()}).ToArray();
            return result;
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
