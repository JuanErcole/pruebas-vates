import { useForm, Controller, useFieldArray} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, Button, FormHelperText, Grid } from '@mui/material'

//////schema

const schema = yup.object().shape({         //crea schema del tipo {task:, description:} (solo campos obligatorios)    
    task: yup.string('the field must be string').min(5, 'min length 5').max(20).required('Task is required'),
    // description: yup.string('the field must be string').min(5, 'min length 5').max(20).required('Description is required')                       // del tipo string . lo que queremos
    

})      
const RHForm = ()=>{
    const {control, handleSubmit, reset, formState:{errors}} = useForm ({                 ///Como van a arrancar todos los inputs
        defaultValues:{                                                                    //conexion de todo
            task:'',
            repeat: [{day:'', hour:''}]
            
        },     
        mode: 'onChange',
        resolver: yupResolver(schema)                                                     // se pasa schema       
    })

    const {fields, append, remove} = useFieldArray({control, name: 'repeat'})             //add y remove items ej, fields dinamicos
    const onSubmit = (data)=>{
        console.log(data)
    }

    return( 
    <>
     <form onSubmit={handleSubmit(onSubmit)}>

     <Controller name='task' control={control} render={({field:{value, onChange}}) => (
         <TextField value={value} onChange={onChange} error={Boolean(errors.task)}/>
     )}/> 

    { errors.task && <FormHelperText> {errors.task.message} </FormHelperText>}

    {fields.map((item, i) =>{
        return (
 
        ////necesario el manejo de key={item.id} para el remove

        <Grid key={item.id}>                       

            <Controller name={`repeat.${i}.day`} control={control} render={({field:{value, onChange}}) => (
                <TextField value={value} onChange={onChange} error={Boolean(errors.task)}/>
            )}/> 

            <Controller name ={`repeat.${i}.hour`} control={control} render={({field:{value, onChange}}) => (
                <TextField value={value} onChange={onChange} error={Boolean(errors.task)}/>
            )}/> 

            <Button onClick={()=>append({day:'', hour:''})}> Agregar </Button>
            <Button onClick={()=>remove(i)}> Quitar </Button>                             

        </Grid>
        )
    })
    }

    <Button type='submit'>Submit </Button>
    

    </form>

    </>)
   
}

//hacer funcionalidad de reset
//hacer llamado
//usar form para mandar data 

export default RHForm