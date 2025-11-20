class HttpService {
    constructor() {
        this.rxjs = window.rxjs;
    }
    post(url, data) {
        const { from } = this.rxjs;

        return from(fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        }));
    }
    get(url) {
        const { from } = this.rxjs;

        return from(fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        }));
    }

    textAnalysis(textData) {

        if (textData) {
            console.log(textData);
            const vowels = (textData.toString().match(/[aeiou]/gi)).length;
            console.log(vowels);
            const consanants = (textData.toString().match(/[bcdfghjklmnpqrstvwxy]/gi)).length;
            console.log(consanants);


            const output = { vowels: vowels, consanants: consanants };
            return this.post('/api/textAnalysis', output);

        }

    }
    BMICalc(BMIdata) {
        if (BMIdata) {
            console.log(BMIdata);

            const totalIn = (BMIdata[1] * 12) + BMIdata[2];
            const BMI = ((BMIdata[0] * 703) / (totalIn * totalIn));
            const output = { BMI: BMI };

            return this.post('/api/BMICalc', output);

        }

    }
}
window.httpService = new HttpService();
