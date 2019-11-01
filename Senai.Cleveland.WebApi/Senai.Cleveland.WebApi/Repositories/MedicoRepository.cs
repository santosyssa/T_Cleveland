using Microsoft.EntityFrameworkCore;
using Senai.Cleveland.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.Cleveland.WebApi.Repositories
{
    public class MedicoRepository
    {
        ClevelandContext ctx = new ClevelandContext();

        public List<Medicos> Listar()
        {
            return ctx.Medicos.Include(x => x.IdFormNavigation).ToList();
        }
    }
}
