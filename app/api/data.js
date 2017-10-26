const people = [
               			{
               				"id": "1",
               				"firstName": "Man",
               				"lastName": "Naseat",
               				"photo": "https://pbs.twimg.com/profile_images/735509975649378305/B81JwLT7.jpg"
               			},
               			{
               				"id": "2",
               				"firstName": "Hello",
               				"lastName": "World",
               				"photo": "https://pbs.twimg.com/profile_images/3424509849/bfa1b9121afc39d1dcdb53cfc423bf12.jpeg"
               			},
               			{
               				"id": "3",
               				"firstName": "Oudam",
               				"lastName": "Kh",
               				"photo": "https://pbs.twimg.com/profile_images/664886718559076352/M00cOLrh.jpg"
               			},
               			{
                            "id": "4",
                            "firstName": "Sopheak",
                            "lastName": "KK",
                            "photo": "https://pbs.twimg.com/profile_images/735509975649378305/B81JwLT7.jpg"
                        },
                        {
                            "id": "5",
                            "firstName": "Maria",
                            "lastName": "Sharapova",
                            "photo": "https://pbs.twimg.com/profile_images/3424509849/bfa1b9121afc39d1dcdb53cfc423bf12.jpeg"
                        },
                        {
                            "id": "6",
                            "firstName": "James",
                            "lastName": "Bond",
                            "photo": "https://pbs.twimg.com/profile_images/664886718559076352/M00cOLrh.jpg"
                        }
               		]

export default () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(people)
    }, 1000)
  })
}