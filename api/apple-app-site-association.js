export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const data = {
    "applinks": {
      "details": [
        {
          "appID": "F36MX4S9UW.com.samahealth.life",
          "paths": ["*"]
        }
      ]
    }
  };
  
  res.status(200).json(data);
}