from rest_framework import serializers

from ..models import Phase, WorkPhase
from work.models import Work
from customer.models import Customer

class DynamicFieldsModelSerializer(serializers.ModelSerializer):
    """
    A ModelSerializer that takes an additional `fields` argument that
    controls which fields should be displayed.
    """

    def __init__(self, *args, **kwargs):
        # Don't pass the 'fields' arg up to the superclass
        fields = kwargs.pop("fields", None)

        # Instantiate the superclass normally
        super().__init__(*args, **kwargs)

        if fields is not None:
            # Drop any fields that are not specified in the `fields` argument.
            allowed = set(fields)
            existing = set(self.fields)
            for field_name in existing - allowed:
                self.fields.pop(field_name)

class PhaseSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = Phase
        fields = ['id', 'name', 'status']


class CustomerSerializer(DynamicFieldsModelSerializer):
    class Meta:
        model = Customer
        fields = ['id', 'name']

class WorkSerializer(DynamicFieldsModelSerializer):
    customer = CustomerSerializer(read_only=True)
    class Meta:
        model = Work
        fields = ['id', 'customer', 'name', 'description', 'deadline', 'delivery_date', 'current_phase', 'total_phase', 'creation_date']


class WorkPhaseSerializer(DynamicFieldsModelSerializer):
    phase = PhaseSerializer(read_only=True)
    work = WorkSerializer(read_only=True)
    class Meta:
        model = WorkPhase
        fields = ['id', 'phase', 'work', 'status']