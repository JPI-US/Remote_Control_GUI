#!/usr/bin/env python3
"""
3D Tower Body Tracking - HTTP Server

A simple HTTP server to serve the 3D tower visualization application.
This server provides CORS headers to allow the web application to load
3D models and resources properly.

Usage:
    python3 server.py
    Then open http://localhost:8005 in your browser.
"""

import http.server
import socketserver
import os
import sys

# Server configuration
PORT = 8005


class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """
    Custom HTTP request handler that adds CORS headers.
    This allows the web application to load resources from the server
    without browser security restrictions.
    """
    
    def translate_path(self, path):
        """Translate URL path to filesystem path, redirecting directories to index.html."""
        # Get the translated path from parent class
        path = super().translate_path(path)
        
        # If the path is a directory, serve index.html instead
        if os.path.isdir(path):
            # Get the directory containing index.html
            index_path = os.path.join(os.path.dirname(path), 'index.html')
            if os.path.exists(index_path):
                return index_path
        return path
    
    def do_GET(self):
        """Handle GET requests, serving index.html for root path."""
        # If accessing root path, serve index.html instead of directory listing
        if self.path == '/' or self.path == '':
            self.path = '/index.html'
        # Call parent class to handle the actual file serving
        return super().do_GET()
    
    def end_headers(self):
        """Add CORS headers before sending response headers."""
        # Allow all origins (for local development)
        # In production, you should specify the actual domain
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def log_message(self, format, *args):
        """Custom log message format for better readability."""
        sys.stdout.write("%s - - [%s] %s\n" %
                        (self.address_string(),
                         self.log_date_time_string(),
                         format % args))


if __name__ == "__main__":
    # Change to the script's directory to serve files from the project root
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    # Create and start the HTTP server
    try:
        with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
            print(f"Server running at http://localhost:{PORT}/")
            print("Press Ctrl+C to stop the server")
            try:
                # Serve requests indefinitely until interrupted
                httpd.serve_forever()
            except KeyboardInterrupt:
                print("\nServer stopped.")
                httpd.shutdown()
    except OSError as e:
        if e.errno == 98:  # Address already in use
            print(f"Error: Port {PORT} is already in use.")
            print("To fix this, either:")
            print(f"  1. Kill the process using port {PORT}: sudo fuser -k {PORT}/tcp")
            print(f"  2. Or find and kill it: sudo lsof -ti :{PORT} | xargs sudo kill -9")
            print(f"  3. Or change the PORT in server.py to a different number")
        else:
            print(f"Error starting server: {e}")
        sys.exit(1)
