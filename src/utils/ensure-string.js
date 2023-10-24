const ensureString = (value)=>{
    let type;
    if(( type =  typeof  value ) !=='string'){
      throw new TypeError('String is expected but received a type of '+ type)
    }
}
export default ensureString