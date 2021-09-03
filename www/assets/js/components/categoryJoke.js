import React, {useState,useEffect} from 'react';
import { Field } from 'formik';
function CategoryJoke ({setData}) {


    const jokesArr = [{value: "one",name: "One true"}]
    const [jokes,setJokes] = useState(jokesArr);
    useEffect(() => {
        fetch('http://api.icndb.com/categories')
            .then(res => res.json())
            .then(res => {

                let arr = res.value.map(item => ({value: item, name: item}))
                setJokes(arr)
            })
    },[])

    return <Field as="select" className="form-select" name="joke">
        {jokes?.map(item=> <option key={item.value} value={item.value}>{item.name}</option>)}
    </Field>
}

export default CategoryJoke;