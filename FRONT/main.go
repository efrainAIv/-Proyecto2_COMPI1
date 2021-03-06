package main

//nodemon --exec go run main.go --signal SIGTERM

import (
	"bytes"
	"encoding/json"
	"fmt"
	"html/template"
	"io/ioutil"
	"log"
	"net/http"
	"net/url"
	"os"
	"os/exec"
	"strconv"
	"strings"
)

//
type Page struct {
	Title string
	Body  []byte
}

//
type Tab struct {
	Nombre         string
	Numero         int
	CabeceraActiva string
	CuerpoActivo   string
	Activa         string
}

//
type Contenido struct {
	Texto string
}

//
type Token struct {
	Lexema  string `json:"lexema"`
	Tipo    int    `json:"tipo"`
	Fila    int    `json:"fila"`
	Columna int    `json:"columna"`
}

//
type Lista struct {
	Analizador string   `json:"analizador"`
	Lista      Analisis `json:"lista"`
}

//
type Analisis struct {
	Lenguaje            string  `json:"lenguaje"`
	ListaTokens         []Token `json:"listaTokens"`
	ListaErroresLex     []Token `json:"listaErroresLex"`
	ListaErroresSintact []Token `json:"listaErroresSintact"`
	Traduccion          string  `json:"traduccion"`
	Grafo               string  `json:"grafo"`
}

//
type Pagina struct {
	Tabs       []Tab
	Python     Analisis
	JavaScript Analisis
}

var tabs = []Tab{}
var pagina = Pagina{}
var lenguaje = ""

func homeHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method == "GET" {
		u, err := url.Parse(r.RequestURI)
		if err != nil {
			log.Fatal(err)
		}
		params := u.Query()
		if params["newTab"] != nil {
			fmt.Println("Hola")

			nombre := "tab" + strconv.Itoa(len(tabs))
			tab := Tab{Nombre: nombre, Numero: len(tabs) + 1, CuerpoActivo: "active", CabeceraActiva: "active", Activa: nombre}
			tabs = append(tabs, tab)
			pagina.Tabs = tabs

			for i := 0; i < len(tabs); i++ {
				if tabs[i].Nombre != nombre {
					tabs[i].CuerpoActivo = "fade"
					tabs[i].CabeceraActiva = ""
					tabs[i].Activa = nombre
				}
			}

			http.Redirect(w, r, "/home/", http.StatusSeeOther)
		} else if params["getTab"] != nil {

			for i := 0; i < len(tabs); i++ {
				if tabs[i].Nombre == strings.Join(params["getTab"], "") {
					tabs[i].CuerpoActivo = "active"
					tabs[i].CabeceraActiva = "active"
					tabs[i].Activa = tabs[i].Nombre
				} else {
					tabs[i].CuerpoActivo = "fade"
					tabs[i].CabeceraActiva = ""
					tabs[i].Activa = ""
				}
			}
			http.Redirect(w, r, "/home/", http.StatusSeeOther)

		} else {

			//fmt.Println(pagina)
			t, _ := template.ParseFiles("home.html")
			t.Execute(w, pagina)
		}
	}
}

func clearHandler(w http.ResponseWriter, r *http.Request) {

	if r.Method == "GET" {
		u, err := url.Parse(r.RequestURI)
		if err != nil {
			log.Fatal(err)
		}
		params := u.Query()

		fmt.Println(params)

	}

}

func sendPYHandler(w http.ResponseWriter, r *http.Request) {

	err := r.ParseForm()
	if err != nil {
		log.Fatal(err)
	}

	cont := r.Form.Get("texto")
	lengu := r.Form.Get("lenguaje")

	if len(cont) > 0 {

		fmt.Println("Contenido alto")
		if lengu == "py" {

			lenguaje = "py"
			fmt.Println("El lenguaje es", lengu)

			resp, er := http.PostForm("http://localhost:8020/analizar", url.Values{"texto": {cont}})
			if er != nil {
				log.Fatal(er)
			}

			//json.NewDecoder(r.Body).Decode(&token)
			json, e := ioutil.ReadAll(resp.Body)
			if e != nil {
				panic(e.Error())
			}
			//bodyString := string(bodyBytes)

			t, err1 := getJSON([]byte(json))
			if err1 != nil {
				log.Fatal(err1)
			}

			fmt.Println(*t)
			pagina.Python = *t

		} else if lengu == "js" {

		}

	}

	/*
		if strings.Contains(cont, "\n") {
			fmt.Println("si tiene")
		}
	*/
	//fmt.Println(cont)

	http.Redirect(w, r, "/home/", http.StatusSeeOther)
}

func grafoHandler(w http.ResponseWriter, r *http.Request) {

	rutaDot := "/home/helmut/Escritorio/DescargasCOMPI1/grafo"

	grafo:=""
	if lenguaje=="py"{

		grafo = pagina.Python.Grafo

	}else if lenguaje=="js"{

		grafo = pagina.JavaScript.Grafo

	}
	if len(grafo) > 0 {

		file, err := os.Create(rutaDot + ".dot")
		defer file.Close()
		if err != nil {
			log.Fatal(err)
		}
		var buffer bytes.Buffer

		graph := "digraph { \n" + grafo + " }"

		buffer.WriteString(graph)

		escribirArchivo(file, buffer.Bytes())

		generarImagen("/home/helmut/Escritorio/DescargasCOMPI1/grafo.dot", "/home/helmut/Escritorio/DescargasCOMPI1/grafo.svg")

	}

	http.Redirect(w, r, "/home/", http.StatusSeeOther)
}

func getJSON(body []byte) (*Analisis, error) {
	var s = new(Analisis)
	err := json.Unmarshal(body, &s)
	if err != nil {
		fmt.Println("whoops:", err)
	}
	return s, err
}

func escribirArchivo(file *os.File, bytes []byte) {
	_, err := file.Write(bytes)

	if err != nil {
		log.Fatal(err)
	}
}

func generarImagen(rutaDot, rutaImagen string) {

	path, _ := exec.LookPath("dot")
	cmd, _ := exec.Command(path, "-Tsvg", rutaDot).Output()
	mode := int(0777)
	ioutil.WriteFile(rutaImagen, cmd, os.FileMode(mode))

}

func main() {

	tab := Tab{Nombre: "home", CabeceraActiva: "active", CuerpoActivo: "active", Activa: "home"}
	tabs = append(tabs, tab)
	http.HandleFunc("/home/", homeHandler)
	http.HandleFunc("/clear/", homeHandler)
	http.HandleFunc("/sendPY/", sendPYHandler)
	http.HandleFunc("/grafo/", grafoHandler)

	pagina.Python = Analisis{}
	pagina.JavaScript = Analisis{}
	pagina.Tabs = tabs
	fmt.Println("Servidor Corriendo...")
	log.Fatal(http.ListenAndServe(":8010", nil))

}
