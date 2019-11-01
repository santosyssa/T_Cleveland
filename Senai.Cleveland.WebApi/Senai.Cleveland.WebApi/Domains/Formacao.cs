using System;
using System.Collections.Generic;

namespace Senai.Cleveland.WebApi.Domains
{
    public partial class Formacao
    {
        public Formacao()
        {
            Medicos = new HashSet<Medicos>();
        }

        public int IdForm { get; set; }
        public string Nome { get; set; }

        public ICollection<Medicos> Medicos { get; set; }
    }
}
