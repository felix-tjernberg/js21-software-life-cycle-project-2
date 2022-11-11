'use client'
import { Formik } from 'formik'
import classes from './PrincessForm.module.css'

function PrincessForm() {
    return (
        <Formik
            className={classes.test}
            initialValues={{
                name: '',
                backgroundColor: '#fd5959',
                hair: '#ff9c6d',
                eyes: '#fcff82',
                mouth: '#afc5ff'
            }}
            onSubmit={async (values, { setSubmitting }) => {
                setTimeout(() => {
                    setSubmitting(false)
                }, 1000)
                try {
                    const graphqlresponse = await fetch(
                        // 'https://graphqllearning1.azurewebsites.net',
                        'http://localhost:4000/',
                        {
                            headers: {
                                'Content-Type': 'application/json',
                                Accept: 'application/json'
                            },
                            method: 'POST',
                            body: JSON.stringify({
                                query: `{
                                    brincesses {
                                      name {${values.name}},
                                      backgroundColor {${values.backgroundColor}, imgSrc},
                                      hair {style, color {${values.hair}, imgSrc} }
                                      eyes {right {${values.eyes}, imgSrc} left {${values.eyes}, imgSrc} }
                                      mouth {up {${values.mouth} imgSrc} down {${values.mouth} imgSrc} }
                                    }
                                  }`
                            })
                        }
                    )
                        .then((response) => {
                            return response.json()
                        })
                        .then((data) => {
                            console.log(data)
                        })
                    const json = await graphqlresponse.json()
                    console.log(json[0].backgroundColor.string)
                    console.log(json.data.brincesses[0])
                    res.status(200).json(json)
                    console.log(values.backgroundColor)
                } catch (error) {
                    // console.log(error)
                }
            }}
            validate={(values) => {
                const errors = {}

                if (values.name.trim() === '') {
                    errors.name = 'You must choose a name for your Brincess!'
                }

                if (values.backgroundColor.trim() === '') {
                    errors.backgroundColor = 'You must choose a color.'
                }

                if (values.hair.trim() === '') {
                    errors.backgroundColor = 'You must choose a color.'
                }

                if (values.eyes.trim() === '') {
                    errors.backgroundColor = 'You must choose a color.'
                }

                if (values.mouth.trim() === '') {
                    errors.backgroundColor = 'You must choose a color.'
                }

                return errors
            }}>
            {({ errors, handleChange, handleSubmit, isSubmitting, values }) => (
                <form className={classes.test} onSubmit={handleSubmit}>
                    <label className={classes['input-label']}>
                        Name
                        <input
                            className={classes['name-input']}
                            name="name"
                            onChange={handleChange}
                            type="text"
                            placeholder="Brincess Name"
                            value={values.name}
                            autoComplete="off"
                        />
                    </label>
                    <span>{errors.name}</span>
                    <label className={classes['input-label']}>
                        Background Color
                        <input
                            className={classes['color-input']}
                            name="backgroundColor"
                            onChange={handleChange}
                            type="color"
                            value={values.backgroundColor}
                        />
                    </label>
                    <span>{errors.backgroundColor}</span>
                    <label className={classes['input-label']}>
                        Hair Color
                        <input
                            className={classes['color-input']}
                            name="hair"
                            onChange={handleChange}
                            type="color"
                            value={values.hair}
                        />
                    </label>
                    <span>{errors.hair}</span>
                    <label className={classes['input-label']}>
                        Eyes Color
                        <input
                            className={classes['color-input']}
                            name="eyes"
                            onChange={handleChange}
                            type="color"
                            value={values.eyes}
                        />
                    </label>
                    <span>{errors.eyes}</span>
                    <label className={classes['input-label']}>
                        Mouth Color
                        <input
                            className={classes['color-input']}
                            name="mouth"
                            onChange={handleChange}
                            type="color"
                            value={values.mouth}
                        />
                    </label>
                    <span>{errors.mouth}</span>
                    <input
                        className={classes['add-button']}
                        disabled={isSubmitting}
                        value="Add Brincess"
                        type="submit"
                    />
                </form>
            )}
        </Formik>
    )
}

export default PrincessForm
