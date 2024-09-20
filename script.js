const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => { 
    button.addEventListener(click, function(){ 
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getattribute('data-proximo');

        atual.classlist.remove('ativo');
        document.getelementbyid(proximoPasso).classlist.add('ativo');
    })
})