import symbl

local_path = './speech.mp3'

# Process audio file
conversation_object = symbl.Audio.process_file(
file_path=local_path) #This is optional if you didn’t setup the symbl.conf file in your home directory. )

f= open("data.txt","w")

x=conversation_object
print(x)
print(str(x))
f.write("TRANSCRIPT\n\n")
f.write(str(x.get_messages())) # Returns the transcript of the conversation
f.write("\n\n\n\n\n")


f.write("ACTION ITEMS\n\n")
f.write(str(conversation_object.get_action_items())) 
f.write("\n\n\n\n\n")

f.write("TOPICS\n\n")
f.write(str(conversation_object.get_topics()))
f.write("\n\n\n\n\n")

f.write("QUESTIONS\n\n")
f.write(str(conversation_object.get_questions()))
f.write("\n\n\n\n\n")

f.write("FOLLOW UPS\n\n")
f.write(str(conversation_object.get_follow_ups()))
f.write("\n\n\n\n\n")

f.write("ANALYTICS\n\n")
f.write(str(conversation_object.get_analytics())) 
f.write("\n\n\n\n\n")


f.close()
