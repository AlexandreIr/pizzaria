const form=document.querySelector('form')
const pre=document.querySelector('pre')
// form dos itens do pedido
const items=[]
// controle de qual select será exibido e qual não será
form.rbtnPizza.addEventListener('click',()=>{
    form.inPizza.className='show'
    form.inDrink.className='hidden'
})
form.rbtnDrink.addEventListener('click',()=>{
    form.inDrink.className='show'
    form.inPizza.className='hidden'
})
// controle do foco no campo texto 
form.inDetails.addEventListener('focus', ()=>{
    if(form.rbtnPizza.checked){
        const pizza=form.inPizza.value
        const num=pizza=='mid-size'?2:pizza=='big'?3:4  //valores que serão mostrados no placeholder de acordo com o select escolhido
        form.inDetails.placeholder='Até '+num+' sabores'
    }
})
form.inDetails.addEventListener('blur',()=>{
    form.inDetails.placeholder=''
})
// submit do form
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let product=[]
    // se o redio pizza estiver marcado irá pegar valores de um select
    if(form.rbtnPizza.checked){
        const num=form.inPizza.selectedIndex
        product=form.inPizza.options[num].text
    }else{  // senão, pega os valores do outro
        const num=form.inDrink.selectedIndex
        product=form.inDrink.options[num].text
    }
    const details=form.inDetails.value  // pega as informações do campo de texto
    items.push(product+'('+details+')') // adiciona ao campo items 
    pre.innerText=items.join('\n')  // mostra na tela como innerText do elemento pre

    form.reset()
    form.rbtnPizza.dispatchEvent(new Event('click'))    // marca o radio rbtnPizza que é o padrão
})