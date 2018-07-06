from rest_framework import serializers
from .models import Lead

class LeadSerializer(serializers.ModelSerializer):
    """
    Handles serialization/deserialization of lead model objects
    """

    class Meta:
        model = Lead
        fields = ('__all__') # Serialize ALL THE THINGS!