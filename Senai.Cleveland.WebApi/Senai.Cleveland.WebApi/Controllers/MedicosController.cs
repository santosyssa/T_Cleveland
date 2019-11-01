using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Senai.Cleveland.WebApi.Repositories;

namespace Senai.Cleveland.WebApi.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]

    [ApiController]
    public class MedicosController : ControllerBase
    {
        MedicoRepository MedicoRepository = new MedicoRepository();

        public IActionResult ListarMedicos()
        {
            return Ok(MedicoRepository.Listar());
        }
    }
}