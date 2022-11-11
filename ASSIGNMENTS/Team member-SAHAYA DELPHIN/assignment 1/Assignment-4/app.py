from flask import Flask,redirect,url_for,render_template



app=Flask(__name__)


@app.route("/")
def helloworld():
    name="Welcomee"
    return render_template("index.html",name=name)

@app.get("/app")
def logS():
    return "app"

@app.get("/user/<name>")
def admin(name):
    if name=="admin":
        return redirect(url_for("helloworld",name=name))
    else :
        return redirect(url_for("logS",name=name))


@app.get("/hello/<int:postID>")
def hello(postID):
    return "page number %d"%postID  #%d-decimal 


@app.get("/home/<name>")
def home(name):
    print(name)
    return "hello %s" %name     #%s-String


if __name__=="__main__":
    app.run(host='0.0.0.0',port=5000)

    #host=System Will run on the IP address of the deployed Server....eg:https://198.168.0.01:3000/app 8Y0000000