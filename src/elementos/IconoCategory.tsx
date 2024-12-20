import {ReactComponent as IcoComida} from '/images/comida.png'

export const IconoCategory = ({nombre}) => {
  switch(nombre){
    case 'comida':
      return <IcoComida />
  }
}
