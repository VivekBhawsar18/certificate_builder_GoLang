package main

import (
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	router := mux.NewRouter()
	router.PathPrefix("/").Handler(http.FileServer(http.Dir("./build")))
	println("Listening at port: 8000")
	http.ListenAndServe(":8000", router)
}
