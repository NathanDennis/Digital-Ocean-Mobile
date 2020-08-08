package main

import (
	"encoding/json"
	"fmt"
	"log"

	"context"
	"net/http"
	"time"

	"github.com/digitalocean/godo"
	"github.com/spf13/viper"
)

func viperSetup() {
	viper.SetConfigFile("../.env")
	viperConfigError := viper.ReadInConfig()
	if viperConfigError != nil {
		log.Fatalf("Error reading config file")
	}
}

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}

func main() {
	// Environment variables setup
	viperSetup()

	// http vars
	DOAPIKey := viper.GetString("VUE_APP_DO_API_KEY")
	authHeader := fmt.Sprintf("Bearer %s", DOAPIKey)
	pat := DOAPIKey
	client := godo.NewFromToken(pat)
	ctx := context.TODO()

	// ################
	// #### ROUTES ####
	// ################

	// ################
	//  ACCOUNT ROUTES
	// ################

	handler := http.NewServeMux()
	// ### Account Route ###
	handler.HandleFunc("/account/profile", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.Header().Set("Authorization", authHeader)
		enableCors(&w)

		account, _, err := client.Account.Get(ctx)
		if err != nil {
			log.Fatalln("Error")
		}

		json.NewEncoder(w).Encode(account)
	})

	// ################
	//  DROPLET ROUTES
	// ################

	// ### List Droplets Route ###
	handler.HandleFunc("/droplets/listdroplets", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.Header().Set("Authorization", authHeader)
		enableCors(&w)

		opt := &godo.ListOptions{
			Page:    1,
			PerPage: 200,
		}

		droplets, _, err := client.Droplets.List(ctx, opt)

		if err != nil {
			log.Fatalln("Error")
		}

		json.NewEncoder(w).Encode(droplets)
	})

	// ################
	//  BILLING ROUTES
	// ################

	// ### Balance Route ###
	handler.HandleFunc("/billing/balance", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.Header().Set("Authorization", authHeader)
		enableCors(&w)

		balance, _, err := client.Balance.Get(ctx)

		if err != nil {
			log.Fatalln("Error")
		}

		json.NewEncoder(w).Encode(balance)
	})
	// ### Billing History Route ###
	handler.HandleFunc("/billing/history", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.Header().Set("Authorization", authHeader)
		enableCors(&w)

		opt := &godo.ListOptions{
			Page:    1,
			PerPage: 200,
		}

		billingHistory, _, err := client.BillingHistory.List(ctx, opt)

		if err != nil {
			log.Fatalln("Error")
		}

		json.NewEncoder(w).Encode(billingHistory)
	})

	// ### Listen And Serve
	fmt.Println("Server starting")
	s := &http.Server{
		Addr:         ":3000",
		Handler:      handler,
		ReadTimeout:  10 * time.Second,
		WriteTimeout: 10 * time.Second,
	}

	s.ListenAndServe()
}
