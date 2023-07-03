


var btn = document.getElementById("btn").addEventListener("click", button)

function button() {

    var select = document.getElementById("select1").value;

    if (select == "") {
        alert("Please select an option!!!!")
    } else {

        var inInput = document.createElement("input");        //inInput created for input
        var inpdiv = document.getElementById("inp");           //div from html
        var innerinp = document.createElement("div")        //created div for div1 and div2
        var inlabel = document.createElement("input");       //created input for label
        var div1 = document.createElement("div");          // created div1 for inlabel
        var div2 = document.createElement("div");           // created  div2 for inInput
        var add = document.createElement("button");



        inpdiv.appendChild(innerinp);
        innerinp.appendChild(div1);
        innerinp.appendChild(div2);
        div1.appendChild(inlabel);
        div1.appendChild(add);
        div2.appendChild(inInput);

        innerinp.setAttribute("class", 'innerinp')


        inInput.setAttribute("type", select)
        inInput.setAttribute("id", "inInput")
        // inlabel.setAttribute("id", "inLabel")
        inInput.setAttribute("class", "inInput")
        // inlabel.setAttribute("class", "inLabel")
        inInput.setAttribute("placeholder", select)
        inlabel.setAttribute("placeholder", "label")
        add.innerHTML = "<i class='fa-solid fa-plus'></i>";
        add.setAttribute("class", "add");
        innerinp.className = "inp";
        innerinp.setAttribute("id","innerinp")


        add.addEventListener("click", add1)
        function add1() {
            if (inlabel.value == "") {
                alert("Please add label")
            }

            else {
                var label = document.createElement("label");
                label.setAttribute("id", "label")
                label.setAttribute("class", "label")
                div1.appendChild(label);
                label.innerHTML = inlabel.value + ":-";
                div1.removeChild(inlabel);
                div1.removeChild(add);
            }



        }


        var remove1 = document.createElement("span");
        var inner = document.createTextNode("✖️");

        remove1.appendChild(inner);
        innerinp.appendChild(remove1);


        remove1.addEventListener("click", remo)
        function remo() {
            innerinp.remove(inInput);
            innerinp.remove(remove1);
        }


        if (select == "Radio") {


            inInput.style.display = "none";
            var inprad = document.createElement("input");
            div2.appendChild(inprad)
            inprad.setAttribute("placeholder", "options")

            var optBtn = document.createElement("button");
            div2.appendChild(optBtn);
            var brk1 = document.createElement("br")
            div2.appendChild(brk1)

            optBtn.addEventListener("click", roption)
            optBtn.innerHTML = "<i class='fa-solid fa-plus'></i>";
            optBtn.setAttribute("class", "add");

            optBtn.setAttribute("id", "optBtn")
            function roption() {

                if (inprad.value == "") {
                    alert("Please add options")
                } 

                else {
                    var rad = document.createElement("input");
                    rad.setAttribute("type", select);
                    rad.setAttribute("id", "rad");
                    div2.appendChild(rad);

                    var label = document.createElement("label");
                    div2.appendChild(label);
                    label.innerHTML = inprad.value;
                    rad.setAttribute("name", inlabel.value)
                    rad.setAttribute("value", inprad.value)

                    // var brk2 = document.createElement("br")
                    // div2.appendChild(brk2)

                     inprad.value="";
                }

            }
        }


        if (select == "Checkbox") {


            inInput.style.display = "none";
            var inche = document.createElement("input");
            div2.appendChild(inche)
            inche.setAttribute("placeholder", "options")

            var optBtn1 = document.createElement("button");
            div2.appendChild(optBtn1);
            var brk12 = document.createElement("br")
            div2.appendChild(brk12)


            optBtn1.addEventListener("click", roption)
            optBtn1.innerHTML = "<i class='fa-solid fa-plus'></i>";
            optBtn1.setAttribute("class", "add");

            optBtn1.setAttribute("id", "optBtn1")
            function roption() {

                if (inche.value == "") {
                    alert("Please add options")
                }

                else {
                    var che = document.createElement("input");
                    che.setAttribute("type", select);
                    che.setAttribute("id", "che")
                    div2.appendChild(che);

                    var label11 = document.createElement("label");
                    div2.appendChild(label11);
                    label11.innerHTML = inche.value;
                    che.setAttribute("name", inlabel.value)
                    che.setAttribute("value", inche.value)


                    // var brk12 = document.createElement("br")
                    // div2.appendChild(brk12)
                    inche.value="";
                }

            }
        }


        if (select == "Select") {

            var sltBtn = document.createElement("button");
            div2.appendChild(sltBtn);
            var brk1 = document.createElement("br")
            div2.appendChild(brk1)
            var slt = document.createElement("select");
            div2.appendChild(slt)

            sltBtn.addEventListener("click", myopt)
            sltBtn.innerHTML = "<i class='fa-solid fa-plus'></i>";
            sltBtn.setAttribute("class", "add");
            sltBtn.setAttribute("id", "sltBtn")
            function myopt() {

                if (inInput.value == "") {
                    alert("Please add options")
                }

                else {
                    var opt = document.createElement("option");
                    slt.appendChild(opt);
                    slt.setAttribute("id", "slt");
                    opt.innerHTML = inInput.value
                    var brk1 = document.createElement("br")
                    div2.appendChild(brk1)

                    inInput.value=" ";
                }
            }

        }
    }

    if (select == "Submit") {
 
        var sub = confirm("Is your form complete!!!!!!!!")
        if (sub == false) {
            inp.removeChild(innerinp)
        } else {
            innerinp.removeChild(div1)
            innerinp.removeChild(remove1);
        }

        inInput.onclick = () => {
        //    document.getElementById("innerInp").setAttribute("class","finalsub")
            
            var screen2 = document.getElementById("screen2");
            
            // document.getElementById("inp").style.display = "none";
            // screen2.style.display = "block";
            screen2.appendChild(inpdiv)
            console.log(screen2)

            // if(document.getElementById("inInput").type=="Submit"){
            //     document.getElementById("innerinp").style.display="none";
            // }


            var submit1 = document.createElement("button");
            screen2.appendChild(submit1)
            submit1.setAttribute("id","submit1")
            submit1.innerText = "Submit";

            submit1.addEventListener("click", finalsubmit)

            function finalsubmit() {
                var screen3 = document.getElementById("screen3");
                var fdiv = document.getElementById("fdiv");
                  fdiv.style.display="block";

                for (var i = 0; i < document.getElementById("inp").childElementCount - 1; i++) {
                    
                    flable1 = document.createElement("label");
                    flable2 = document.createElement("label");
                    flable1.setAttribute("class","flabel");
                    flable2.setAttribute("class","flabel")


                    fdiv.appendChild(flable1);
                    fdiv.appendChild(flable2);

                    var abc = document.getElementsByClassName("label");
                    var pqr = document.getElementsByClassName("inInput");
                    var brk13 = document.createElement("br");
                    flable1.innerHTML += abc[i].innerHTML;
                    if (pqr[i].type == "text" || pqr[i].type == "number" || pqr[i].type == "email") {
                        flable2.innerHTML += pqr[i].value;
                        fdiv.appendChild(brk13);
                    } else if (pqr[i].type == "radio") {
                        var fradio = document.getElementById("rad");
                        var radname = document.getElementsByName(fradio.name)

                        for (var j = 0; j < radname.length; j++) {
                            if (radname[j].checked == true) {
                                flable2.innerHTML += radname[j].value;
                                flable2.outerHTML += "<br>";
                            }
                        }
                    } else if (pqr[i].type == "checkbox") {
                        var fcheck = document.getElementById("che");
                        var chkname = document.getElementsByName(fcheck.name)

                        for (var k = 0; k < chkname.length; k++) {
                            if (chkname[k].checked == true) {
                                flable2.innerHTML += chkname[k].value + ",";
                                // flable2.outerHTML += "<br>";
                            }
                        }
                    } else {
                        flable2.innerHTML += document.getElementById("slt").value;
                        flable2.outerHTML += "<br>";
                    }
                }
            }
        }
    }
}


