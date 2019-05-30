import Vue from "vue";

let documents = [{
    nome: "Cancelamento de ART",
    templates: [{
        nome: "Deferido",
        arquivo: "",
        campos: [{
            variavel: "n° da ART",
            descricao: "Número da ART"
        },
        {
            variavel: "descrever os serviços",
            descricao: "Descrição dos serviços"
        },
        {
            variavel: "data da solicitação",
            descricao: "Data da solicitação"
        },
        {
            variavel: "descrever as alegações do requerente",
            descricao: "Descrição das alegações"
        },
        {
            variavel: "titulo profissional e nome do profissional",
            descricao: "Profissional"
        }]
    },
    {
        nome: "Indeferido",
        arquivo: "",
        campos: [{
            variavel: "n° da ART",
            descricao: "Número da ART"
        },
        {
            variavel: "descrever os serviços",
            descricao: "Descrição dos serviços"
        },
        {
            variavel: "data da solicitação",
            descricao: "Data da solicitação"
        }]
    }]
}];

var app = new Vue({
    el: "#app",
    data: {
        title: "Hello World!",
        documents: documents
    },
    methods:{
        changeTitle: function(event){
            this.title = event.target.value;
        },
        buildDocument: function(event){
            
        }
    }
});

