<template>
    <div>
    <form @submit.prevent="submitForm">
        <label for="firstName">Imię:</label>
        <input v-model="formData.firstName" type="text" id="firstName" required>
        <br>

        <label for="lastName">Nazwisko:</label>
        <input v-model="formData.lastName" type="text" id="lastName" required>
        <br>

        <label for="email">Adres e-mail:</label>
        <input v-model="formData.email" type="email" id="email" required>
        <br>

        <label for="message">Treść wiadomości:</label>
        <textarea v-model="formData.message" id="message" required></textarea>
        <br>

        <button type="submit">Wyślij</button>
    </form>

    <table v-if="submittedData.length > 0">
      <thead>
        <tr>
          <th>Imię</th>
          <th>Nazwisko</th>
          <th>Email</th>
          <th>Treść wiadomości</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in submittedData" :key="index">
          <td>{{ data.firstName }}</td>
          <td>{{ data.lastName }}</td>
          <td>{{ data.email }}</td>
          <td>{{ data.message }}</td>
        </tr>
      </tbody>
    </table>

</div>
</template>
  
<script>
export default {
    data() {
        return {
            formData: {
                firstName: '',
                lastName: '',
                email: '',
                message: ''
            },
            submittedData: [],
            allData: []
        };
    },
    methods: {
        submitForm() {
            this.$axios.post('http://localhost:8000/api/contact', this.formData)
                .then(response => {
                    console.log(response.data);

                    this.submittedData.push(response.data.data);

                    this.formData= {
                        firstName: '',
                        lastName: '',
                        email: '',
                        message: ''
                    };
                })
                .catch(error => {
                    console.error(error);
                });
        },
        getAllData() {
            this.$axios.get('http://localhost:8000/api/contact')
                .then(response => {
                    console.log(response.data);

                    this.allData.push(response.data.data)

                })
                .catch(error => {
                    console.error(error);
                });
        }
    }
};
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

label {
    margin-bottom: 0.5rem;
}

input,
textarea {
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
}

button:hover {
    background-color: #eee;
}

table {
    margin-top: 2rem;
    border-collapse: collapse;
    width: 100%;
}

th,
td {
    padding: 0.5rem;
    border: 1px solid #ccc;
    text-align: left;
}



</style>