using Senai.Cleveland.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.Cleveland.WebApi.Repositories
{
    public class FormacaoRepository
    {
        ClevelandContext ctx = new ClevelandContext();

        public List<Formacao> Listar()
        {
            return ctx.Formacao.ToList();
        }
    }
}
