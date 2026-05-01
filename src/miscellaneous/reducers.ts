

export const reduce = (prevGlobalState:any, action:any)=>{


    switch(action.type){

        case 'SING':
            return {...prevGlobalState,
                    singing:true}
        default:
            return prevGlobalState;
    }

}