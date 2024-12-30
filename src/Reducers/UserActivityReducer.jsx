const Action ={
    setData:'setData',
    
}

const UserActivityReducer = (state,{type,data}) => {
   switch(type){
    case Action.setData:
        return ({
            ...state,
            image:data.image,
            name:data.name,
            city:data.city,
            position:data.position,


        });
     default:
          return ({...state});
   }  
};


