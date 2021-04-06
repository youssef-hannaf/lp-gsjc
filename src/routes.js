import parent from './components/parent.vue'
import enfant from './components/enfant.vue'
import validation from './components/validation.vue'




const routes = [
    
    {path:"/parent",component:parent,name:"parent"},
    {path:"/enfant",component:enfant,name:"enfant"},
    {path:"/validation",component:validation,name:"validation"},

];

export default routes;