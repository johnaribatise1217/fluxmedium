const ensureBool = (value)=>{
    let type;
    if(( type =  typeof  value ) !=='boolean'){
      throw new TypeError('Boolean is expected but received a type of '+ type)
    }
}
export default ensureBool