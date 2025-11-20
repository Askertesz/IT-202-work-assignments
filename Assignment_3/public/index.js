function VandCCount() {
  const file = fileInput.files[0]; //make a fileInput array and load the first file into it

  $('#vowelCountForm').on('submit', function (e) {
    e.preventDefault();

    let fileContent = 'testing';
    const reader = new FileReader();

    reader.onload = (e) => {

      fileContent = e.target.result; //this stores file content in the fileContent variable
      //contentDisplay.textContent = fileContent; //testing to make sure the file is read
      console.log("Content stored in variable: ", fileContent);
      console.log(typeof fileContent);
      if (file && fileContent) {
        httpService.textAnalysis(fileContent).subscribe({
          next: (data) => {
            $('#contentDisplay').text(data.message);
          },
          error: (error) => {
            console.error('Http Service Error:', error);
            $('#contentDisplay').text('Error loading file');
          }
        });
      }
      else {
        alert("Please select a file");
        $('#contentDisplay').text('Please select a text file')
      }
    };


    reader.readAsText(file);

  });
}

function BMICalc() {

  $('#BMIForm').on('submit', function (e) {
    e.preventDefault();
    const weightLbs = parseFloat(document.getElementById('weight').value);
    const heightFt = parseFloat(document.getElementById('heightFt').value);
    const heightIn = parseFloat(document.getElementById('heightIn').value);
    const BMIDisplay = document.getElementById('BMIDisplay');

    if (weightLbs && heightFt && heightIn) {
      const BMI = [weightLbs, heightFt, heightIn];

      httpService.BMICalc(BMI).subscribe({
        next: (data) => {
          $('#BMIDisplay').text(data.message);
        },
        error: (error) => {
          console.error('Http Service Error:', error);
          $('#BMIDisplay').text('Error with BMI input');
        }
      })
    }
    else {
      alert("Please make sure to fill out each section of the BMI form. If you don't have inches in your height, please put 0");
      BMIDisplay.textContent('Please fill out the entire form');
    }

  })

}









