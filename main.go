package main

import (
	"net/http"

	rice "github.com/GeertJohan/go.rice"
	"github.com/gorilla/mux"
)

func main() {
	router := mux.NewRouter()
	router.PathPrefix("/").Handler(http.FileServer(rice.MustFindBox("AT-Tool_certificate-builder").HTTPBox()))
	println("Listning at port : 8000") 
	http.ListenAndServe(":8000" , router)
}
