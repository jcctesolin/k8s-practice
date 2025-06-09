
kubectl get all -n aplicacao-web
kubectl describe deployment nginx-deploy -n aplicacao-web
kubectl describe quota quota-padrao -n aplicacao-web
kubectl describe limits limites-padrao -n aplicacao-web

kubectl delete ns aplicacao-web

