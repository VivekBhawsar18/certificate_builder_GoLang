package main

import (
	"net/http"

	rice "github.com/GeertJohan/go.rice"
	"github.com/gorilla/mux"
)

func main() {
	router := mux.NewRouter()
	router.PathPrefix("/").Handler(http.FileServer(rice.MustFindBox("AT-Tool_certificate-builder").HTTPBox()))
	println("Listning at port : 12345") 
	http.ListenAndServe(":5500" , router)
}
