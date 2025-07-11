from google import genai

client = genai.Client(api_key="AIzaSyBCvPoCwi-H4lC2tSc1iSMng18jhXlMiIM")

def chat_with_gemini (prompt):
    
    response = client.models.generate_content(
        model="gemini-2.0-flash", contents=prompt
    )

    return response.text